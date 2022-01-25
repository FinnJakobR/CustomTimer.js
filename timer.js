class EndlessYTtimer {
    constructor() {
        this.now = new Date('2021-01-01T00:00:00');
        this.allreadyStated = false;
        this.STATE = "NOTRUNNING";
        this.pause = true;
    }
    startTimer() {
        this.pause = false;
        this.STATE = "RUNNING"
        if (this.allreadyStated == false) {
            this.allreadyStated = true;
            this.timerIntervall = setInterval(() => {
                if (!this.pause) {
                    this.now = new Date(this.now.getTime() + 1000);
                    return this.now.toString().slice(this.now.toString().indexOf("2021") + 4, this.now.toString().indexOf("G"));

                }

            }, 1000)
        }
    }
    getCurrentValue() {
        return this.now.toString().slice(this.now.toString().indexOf("2021") + 4, this.now.toString().indexOf("G"));
    }
    getCurrentSeconds() {
        return this.now.getSeconds();
    }
    getCurrentMinutes() {
        return this.now.getMinutes();
    }
    getCurrentHours() {
        return this.now.getHours();
    }
    getCurrentDays() {
        return this.now.getDay() - 1;
    }
    getCurrentMonths() {
        return this.now.getMonths();
    }
    getCurrentYears() {
        return this.now.getFullYear() - 2021;
    }
    stop() {
        clearInterval(this.timerIntervall);
        this.now = new Date('2021-01-01T00:00:00');
        this.allreadyStated = false;
        this.STATE = "STOPPED"
    }
    pauseTimer() {
        this.pause = true;
        this.STATE = "PAUSED"
            //intervallstopppen
    }
    on(event, callback) {
        if (event == "SecondsChanged") {
            if (this.allreadyStated == false) {
                setInterval(() => {
                    if (!this.pause) {
                        callback()
                    }
                }, 1000)
            }
        } else if (event == "MinutesChanged") {
            if (this.allreadyStated == false) {
                setInterval(() => {
                    if (!this.pause) {
                        callback()
                    }
                }, 60000)
            }
        } else if (event == "HoursChanged") {
            if (this.allreadyStated == false) {
                setInterval(() => {
                    if (!this.pause) {
                        callback()
                    }
                }, 3600000)
            }
        } else if (event == "DaysChanged") {
            if (this.allreadyStated == false) {
                setInterval(() => {
                    if (!this.pause) {
                        callback()
                    }
                }, 86400000)
            }
        } else if (event == "MonthsChanged") {
            if (this.allreadyStated == false) {
                setInterval(() => {
                    if (!this.pause) {
                        callback()
                    }
                }, 2.629746 * (10 ^ 9))
            }
        } else {
            console.error("This is not a valid EventListener for this Timer");
        }
    }
    add(val) {
        var z = new Date(this.now.getTime() + val);
        return z.toString().slice(z.toString().indexOf("2021") + 4, z.toString().indexOf("G"));
    }
    sub(val) {
        var z = new Date(this.now.getTime() - val);
        return z.toString().slice(z.toString().indexOf("2021") + 4, z.toString().indexOf("G"));

    }
    startAt(val) {
        this.pause = false;
        this.STATE = "RUNNING"
        var conval = val.replace(/ /gi, "");
        this.now = new Date(`2021-01-01T${conval}`);
        if (this.allreadyStated == false) {
            this.allreadyStated = true;
            this.timerIntervall = setInterval(() => {
                console.log(this.pause);
                if (!this.pause) {
                    this.now = new Date(this.now.getTime() + 1000);
                    return this.now.toString().slice(this.now.toString().indexOf("2021") + 4, this.now.toString().indexOf("G"));
                }

            }, 1000)
        }
    }
    endAt(val) {
        setInterval(() => {
            if (!this.pause) {
                if (new Date("2021-01-01T" + val) == this.now) {
                    console.warn("Timer Reached the defined End");
                    this.stop();
                }
            }

        }, 1000)
    }
    convertIn(event) {
        var sec = this.now.getSeconds()
        var min = this.now.getMinutes();
        var std = this.now.getHours();
        var days = Number(this.now.toString().slice(8, 10)) - 1;
        var month = this.now.getMonth();
        var year = this.now.getFullYear() - 2021;
        if (event == "Seconds") {
            return sec + (min * 60) + (std * 3600) + (days * 86400) + (year * 31536000) + (month * 2628000);
        } else if (event == "Minutes") {
            return (sec / 60) + min + (std * 60) + (days * 1440) + (year * 525600) + (month * 43800);
        } else if (event == "Days") {
            return (sec / 60) + min + (std * 60) + (days * 1440) + (year * 525600) + (month * 43800);
        } else {
            console.error(event + " " + "is not a valid Timer-Convert Parameter")
        }
    }
}
