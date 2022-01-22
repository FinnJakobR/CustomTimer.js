class EndlessYTtimer {
    constructor() {
        EndlessYTtimer.prototype.now = new Date('2021-01-01T00:00:00');
        EndlessYTtimer.prototype.allreadyStated = false;

    }
    startTimer() {
        EndlessYTtimer.prototype.pause = false;
        if (EndlessYTtimer.prototype.allreadyStated == false) {
            EndlessYTtimer.prototype.allreadyStated = true;
            this.timerIntervall = setInterval(() => {
                if (!this.pause) {
                    EndlessYTtimer.prototype.now = new Date(EndlessYTtimer.prototype.now.getTime() + 1000);
                    return EndlessYTtimer.prototype.now.toString().slice(EndlessYTtimer.prototype.now.toString().indexOf("2021") + 4, EndlessYTtimer.prototype.now.toString().indexOf("G"));

                }

            }, 1000)
        }
    }
    getCurrentSeconds() {
        return EndlessYTtimer.prototype.now.getSeconds();
    }
    getCurrentMinutes() {
        return EndlessYTtimer.prototype.now.getMinutes();
    }
    getCurrentHours() {
        return EndlessYTtimer.prototype.now.getHours();
    }
    getCurrentDays() {
        return EndlessYTtimer.prototype.now.getDay() - 1;
    }
    getCurrentMonths() {
        return EndlessYTtimer.prototype.now.getMonths();
    }
    getCurrentYears() {
        return EndlessYTtimer.prototype.now.getFullYear() - 2021;
    }
    stop() {
        clearInterval(EndlessYTtimer.prototype.timerIntervall);
        EndlessYTtimer.prototype.allreadyStated = false;
    }
    pauseTimer() {
        EndlessYTtimer.prototype.pause = true;
        //intervallstopppen
    }
    on(event, callback) {
        if (event == "SecondsChanged") {
            if (EndlessYTtimer.prototype.allreadyStated == false) {
                setInterval(() => {
                    if (!this.pause) {
                        callback()
                    }
                }, 1000)
            }
        } else if (event == "MinutesChanged") {
            if (EndlessYTtimer.prototype.allreadyStated == false) {
                setInterval(() => {
                    if (!this.pause) {
                        callback()
                    }
                }, 60000)
            }
        } else if (event == "HoursChanged") {
            if (EndlessYTtimer.prototype.allreadyStated == false) {
                setInterval(() => {
                    if (!this.pause) {
                        callback()
                    }
                }, 3600000)
            }
        } else if (event == "DaysChanged") {
            if (EndlessYTtimer.prototype.allreadyStated == false) {
                setInterval(() => {
                    if (!this.pause) {
                        callback()
                    }
                }, 86400000)
            }
        } else if (event == "MonthsChanged") {
            if (EndlessYTtimer.prototype.allreadyStated == false) {
                setInterval(() => {
                    if (!this.pause) {
                        callback()
                    }
                }, 2.629746 * (10 ^ 9))
            }
        } else {
            console.error("This is not a valid EventListiner for this Timer");
        }
    }
    add(val) {
        var z = new Date(EndlessYTtimer.prototype.now.getTime() + val);
        return z.toString().slice(z.toString().indexOf("2021") + 4, z.toString().indexOf("G"));
    }
    sub(val) {
        var z = new Date(EndlessYTtimer.prototype.now.getTime() - val);
        return z.toString().slice(z.toString().indexOf("2021") + 4, z.toString().indexOf("G"));

    }
    startAt(val) {
        EndlessYTtimer.prototype.pause = false;
        let now = new Date('2021-01-01T' + val)
        this.timerIntervall = setInterval(() => {
            if (!this.pause) {
                now = new Date(now.getTime() + 1000);
                console.log(EndlessYTtimer.prototype.now.toString().slice(EndlessYTtimer.prototype.now.toString().indexOf("2021") + 4, EndlessYTtimer.prototype.now.toString().indexOf("G")))
            }

        }, 1000)
    }
    endAt(val) {
        this.timerIntervall = setInterval(() => {
            if (!this.pause) {
                if (new Date("2021-01-01T" + val) == EndlessYTtimer.prototype.now) {
                    console.warn("Timer Reached the defined End");
                    this.stop();
                }
            }

        }, 1000)
    }
    convertIn(event) {
        var sec = EndlessYTtimer.prototype.now.getSeconds()
        var min = EndlessYTtimer.prototype.now.getMinutes();
        var std = EndlessYTtimer.prototype.now.getHours();
        var days = Number(EndlessYTtimer.prototype.now.toString().slice(8, 10)) - 1;
        var month = EndlessYTtimer.prototype.now.getMonth();
        var year = EndlessYTtimer.prototype.now.getFullYear() - 2021;
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