
enum PIN_DigitalWrite {
    //% block="D2"
    D2,
    //% block="D3"
    D3,
    //% block="D5"
    D5,
   //% block="D6"
    D6,
    //% block="D7"
    D7,
    //% block="D9"
    D9,
    //% block="D10"
    D10,
    //% block="D11"
    D11,
    //% block="D12"
    D12,

}

enum Method {
    //% block="温度(°C)"
    getTemperature,
    //% block="湿度(%rh)"
    getHumidity,
}

//% color="#238E23" iconWidth=50 iconHeight=40
namespace dht11 {
    //% block="读取引脚[YINJIAO][FANGFA]" blockType="reporter"
    //% YINJIAO.shadow="dropdown" YINJIAO.options="PIN_DigitalWrite"
    //% FANGFA.shadow="dropdown" FANGFA.options="Method"
    export function gongneng(parameter: any, block: any) {
        let YINJIAO = parameter.YINJIAO.code;
        let FANGFA = parameter.FANGFA.code;
        Generator.addInclude("DHT11", "#include <DFRobot_DHT.h>");
        Generator.addObject("DHT11",`DFRobot_DHT`, `dht11`);
        Generator.addSetup("DHT11",`dht11.begin(${YINJIAO}, DHT11);`);
        Generator.addCode(`dht11.${FANGFA}()`);
    }