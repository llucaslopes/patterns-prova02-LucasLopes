class Message {
  constructor(text) {
    this.text = text;
  }

  getText() {
    return this.text;
  }
}

class MessageDecorator {
  constructor(message) {
    this.message = message;
  }

  getText() {
    return this.message.getText();
  }
}

class CapitalizeDecorator extends MessageDecorator {
  getText() {
    const text = this.message.getText();
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}

class ExclamationDecorator extends MessageDecorator {
  getText() {
    return this.message.getText() + "!";
  }
}

const msg = new Message("hoje o dia está horrível");
console.log(msg.getText());

const decoratedMsg = new ExclamationDecorator(new CapitalizeDecorator(new Message("hoje o dia está horrível")));
console.log(decoratedMsg.getText());

