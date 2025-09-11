let timerId;
let cursorCount = 0;

self.addEventListener('message', function(event) {
    console.log("Worker: Hi there, I'm your new friend the worker :)")
    if (event.data && event.data.type === 'updateCps') {
        const totalCps = (event.data.bumwackers * 1) + (event.data.wilsons * 5)  + (event.data.nippys * 20); // 1 CPS for bumwackers, 5 for wilsons
        console.log('Worker: Received updateCps message. New total CPS:', totalCps);
        resetInterval(totalCps);
        if (event.data.jims < 0) {
            const totalCps = 500;
            console.log('Worker: Received updateCps message that contains jims. New total CPS:', totalCps);
            bigInterval(totalCps);
        }
    }
});

function resetInterval(newCps) {
    if (timerId) {
        clearInterval(timerId);
    }

    if (newCps > 0) {
        const delay = 1000 / newCps; 
        timerId = setInterval(() => {
            self.postMessage('autoclick');
        }, delay);
        console.log('Worker: Interval started with delay:', delay);
    } else {
        timerId = null;
        console.log('Worker: Total CPS is zero, stopping interval.');
    }
}

function bigInterval(newCps) {
    if (timerId) {
        clearInterval(timerId);
    }

    if (newCps > 0) {
        const delay = 1000; 
        timerId = setInterval(() => {
            self.postMessage('superclick');
        }, delay);
        console.log('Worker: Interval started with delay:', delay);
    } else {
        timerId = null;
        console.log('Worker: Total CPS is zero, stopping interval.');
    }
}






