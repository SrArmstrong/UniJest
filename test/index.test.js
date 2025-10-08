const hash = require('./testindex.js');

test('Verificar Hash', () => {
    const mensaje = "contraseña";
    const hashtest = hash(mensaje);
    expect(hashtest).toEqual("edf9cf90718610ee7de53c0dcc250739239044de9ba115bb0ca6026c3e4958a5");
})

// Sergio Pérez Aldavalde - IDGS11 - 2022371061