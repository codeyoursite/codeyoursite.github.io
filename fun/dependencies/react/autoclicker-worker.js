let timerId;
let cursorCount = 0;

self.addEventListener('message', function(event) {
    if (event.data && event.data.type === 'updateCps') {
        const totalCps = (event.data.bumwackers * 1) + (event.data.wilsons * 5)  + (event.data.nippys * 20)  + (event.data.jims * 500); // 1 CPS for bumwackers, 5 for wilsons
        console.log(totalCps)
        console.log('Worker: Received updateCps message. New total CPS:', totalCps);
        resetInterval(totalCps);
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



