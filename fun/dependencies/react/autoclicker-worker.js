let timerId;
let superTimerId;

self.addEventListener('message', function(event) {
    console.log("Worker: Hi there, I'm your new friend the worker :)");
    if (event.data && event.data.type === 'updateCps') {
        
        // This is the main change: Check for 'jims' first.
        if (event.data.jims > 0) {
            console.log('Worker: Jim detected. Starting bigInterval.');
            bigInterval(event.data.jims);
        } else {
            // Only calculate and reset the standard interval if no 'jims' are present.
            const totalCps = (event.data.bumwackers * 1) + (event.data.wilsons * 5) + (event.data.nippys * 20);
            console.log('Worker: Received updateCps message. New total CPS:', totalCps);
            resetInterval(totalCps);
        }
    }
});

function resetInterval(newCps) {
    // Clear any active timers first.
    if (timerId) {
        clearInterval(timerId);
    }
    if (superTimerId) {
        clearInterval(superTimerId);
        superTimerId = null; // Reset the super timer ID
    }

    if (newCps > 0) {
        const delay = 1000 / newCps;
        timerId = setInterval(() => {
            self.postMessage('autoclick');
        }, delay);
        console.log('Worker: Standard interval started with delay:', delay);
    } else {
        timerId = null;
        console.log('Worker: Total CPS is zero, stopping interval.');
    }
}

function bigInterval(jims) {
    // Clear the standard interval to prevent conflicts.
    if (timerId) {
        clearInterval(timerId);
        timerId = null; // Reset the standard timer ID
    }
    
    // Clear the existing super interval before starting a new one.
    if (superTimerId) {
        clearInterval(superTimerId);
    }

    const delay = 1000/jims;
    superTimerId = setInterval(() => {
        self.postMessage('superclick');
    }, delay);
    console.log('Worker: Big interval started with delay:', delay);
}


