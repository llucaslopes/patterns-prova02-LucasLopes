class TV {
  turnOn() {
    console.log("TV ligada.");
  }
  turnOff() {
    console.log("TV desligada.");
  }
}

class Radio {
  turnOn() {
    console.log("Rádio ligado.");
  }
  turnOff() {
    console.log("Rádio desligado.");
  }
}

class RemoteControl {
  constructor(device) {
    this.device = device;
  }

  pressPowerButton(on) {
    if (on) this.device.turnOn();
    else this.device.turnOff();
  }
}

const tv = new TV();
const radio = new Radio();

const remoteTV = new RemoteControl(tv);
remoteTV.pressPowerButton(true);
remoteTV.pressPowerButton(false);

const remoteRadio = new RemoteControl(radio);
remoteRadio.pressPowerButton(true);
remoteRadio.pressPowerButton(false);