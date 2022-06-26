class AnyClass {
  constructor(element) {
    this.ref = new WeakRef(element);
  }
}

// Un WeakRefobjeto le permite mantener una referencia débil a otro objeto,
// sin evitar que ese objeto sea recolectado como basura.
