class BMI{
        constructor (height, weight){
                this.height = height;
                this.weight = weight;
                this.bmi = this.calc();
        }

        calc(){
                const heightM = this.height/100;
                return this.weight / (heightM * heightM);
        }

        print(){
                let res = '표준';
                if(this.bmi >= 25) {
                        res = 'fat';
                } else if (this.bmi >= 18.5) {
                        res = 'standard';
                } else {
                        res = 'thin'
                }
                console.log("BMI = " + res);
        }
}

const bmi = new BMI(168, 75);
bmi.print();
