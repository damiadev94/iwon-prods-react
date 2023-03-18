const smoothScroll = (target:any, duration:any, compensation:any) => {
    let elemTarget:any = document.getElementById(target)
    let elemPos = elemTarget.getBoundingClientRect().top - compensation;
    let initialPos = window.scrollY;
    let initialTime:any = null;

    const animation = (presentTime:any) => {
        if(initialTime === null) initialTime = presentTime;
        let passedTime = presentTime - initialTime;
        let typeAnimation = easeInOutQuad(passedTime, initialPos, elemPos, duration);

        window.scrollTo(0, typeAnimation);

        if(passedTime < duration) requestAnimationFrame(animation);
    }

    requestAnimationFrame(animation);
}

const easeInOutQuad = (t:number, b:number, c:number, d:number) => {
    t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
}; 

export { smoothScroll };