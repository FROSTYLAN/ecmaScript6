class Message {
  #show(val) {
    console.log(val);
  }
}

const message = new Message();
message.show("Hola!");

// Con el simbolo privado (#) el método solo pertenecerá a esa clase.
