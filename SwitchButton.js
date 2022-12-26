class SwitchButton {

    constructor(lamp) {
        this.status = false;
        this.lamp = lamp;
    }

    connectToLamp(newLamp){
        this.lamp = newLamp;
    }

    switchOnOff(){
        this.status = !this.status;
        //khong goi truc tiep thong qua thuoc tinh
        //goi thong qua phuong thuc
        this.lamp.turnOnOff();
    }
}
