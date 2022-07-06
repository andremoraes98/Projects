const { expect } = require('chai');
const sinon = require('sinon');

const ServicesProducts = require('../../services/servicesProducts');
const ControllerProduct = require('../../controllers/controllerProducts');

describe('Retorna todos os produtos', () => {
  describe('quando não é informado um "id"', () => {
    const req = {};
    const res = {};

    before(() => {
      const products = [
        {
          "id": 1,
          "name": "Martelo de Thor"
        }
      ];

      sinon.stub(ServicesProducts, 'getAll').resolves(products);

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(products);
    });

    after(() => {
      ServicesProducts.getAll.restore();
    });

    it('espera um status 200.', async () => {
      await ControllerProduct.getAll(req, res);

      expect(res.status.calledWith(200)).to.be.equal(true);
    });

    it('espera retornar um json com os produtos.', async () => {
      const products = await ControllerProduct.getAll(req, res);

      expect(products).to.be.a('array');
    });
  });

  describe('quando é informado um "id"', () => {
    const req = {};
    const res = {};

    before(() => {
      const products = {
        "id": 1,
        "name": "Martelo de Thor"
      };

      sinon.stub(ServicesProducts, 'getById').resolves(products);

      req.params = { id: 1 };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(products);
    });

    after(() => {
      ServicesProducts.getById.restore();
    });

    it('espera um status 200.', async () => {
      await ControllerProduct.getById(req, res);

      expect(res.status.calledWith(200)).to.be.equal(true);
    });

    it('espera retornar um json com os produtos.', async () => {
      const products = await ControllerProduct.getById(req, res);

      expect(products).to.be.a('object');
    });
  });

  describe('quando não é encontrado um produto com o "id".', () => {
    const req = {};
    const res = {};

    before(() => {
      sinon.stub(ServicesProducts, 'getById').resolves(undefined);

      req.params = { id: 10 };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns({ message: 'Product not found' });
    });

    after(() => {
      ServicesProducts.getById.restore();
    });

    it('espera um status 404.', async () => {
      await ControllerProduct.getById(req, res);

      expect(res.status.calledWith(404)).to.be.equal(true);
    });

    it('espera retornar um json com os produtos.', async () => {
      const products = await ControllerProduct.getById(req, res);

      expect(products).to.have.property('message');
    });
  })
});

describe('Cria um produto', () => {
  const req = {};
  const res = {};

  before(() => {
    const product = {
      id: 10,
      name: "Eu sou a Lenda"
    };

    sinon.stub(ServicesProducts, 'create').resolves(product);

    req.body = {
      name: "Eu sou a Lenda"
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(product);
  });

  after(() => {
    ServicesProducts.create.restore();
  });

  it('espera que seja retornado um código 201.', async () => {
    await ControllerProduct.create(req, res);

    expect(res.status.calledWith(201)).to.be.equal(true);
  });

  it('espera que o produto criado seja retornado.', async () => {
    const product = await ControllerProduct.create(req, res);

    expect(product).to.be.a('object');
  });
});

describe('Atualiza um produto', () => {
  const req = {};
  const res = {};

  before(() => {
    req.params = {
      id: 1
    };
    req.body = {
      name: 'Manopla de Thanos'
    };
    const product = {
      id: req.params.id,
      name: req.body.name,
    };

    sinon.stub(ServicesProducts, 'update').resolves(product);
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(product);
  });

  after(() => {
    ServicesProducts.update.restore();
  });

  it('espera que seja retornado um código 200.', async () => {
    await ControllerProduct.update(req, res);

    expect(res.status.calledWith(200)).to.be.equal(true);
  });

  it('espera que o produto criado seja retornado.', async () => {
    const product = await ControllerProduct.update(req, res);

    expect(product).to.be.a('object');
  });
});

describe('Deleta um produto', () => {
  const req = {};
  const res = {};

  before(() => {
    req.params = {
      id: 1
    };

    sinon.stub(ServicesProducts, 'deleteById').resolves();
    res.status = sinon.stub().returns(res);
    res.end = sinon.stub().returns();
  });

  after(() => {
    ServicesProducts.deleteById.restore();
  });

  it('espera que seja retornado um código 204.', async () => {
    await ControllerProduct.deleteById(req, res);

    expect(res.status.calledWith(204)).to.be.equal(true);
  });
});

describe('Filtra um produto', () => {
  const req = {};
  const res = {};

  before(() => {
    req.query = {
      q: 'mart'
    };

    const product = [
      {
        id: 1,
        name: 'Martelo de Thor',
      }
    ];

    sinon.stub(ServicesProducts, 'searchByTerm').resolves(product);
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(product);
  });

  after(() => {
    ServicesProducts.searchByTerm.restore();
  });

  it('espera que seja retornado um código 200.', async () => {
    await ControllerProduct.searchByTerm(req, res);

    expect(res.status.calledWith(200)).to.be.equal(true);
  });
});