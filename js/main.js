function startMilestoneScene() {
	const controller = new ScrollMagic.Controller();
    const timeline = new TimelineMax();

    const tween1 = TweenMax.fromTo("#animate1", 1, { y: 4000 }, { y: 0, });
    const tween2 = TweenMax.fromTo("#animate2", 1, { y: 4000 }, { y: 0, });
    const tween3 = TweenMax.fromTo("#animate3", 1, { y: 4000 }, { y: 0, });

	const scene1 = new ScrollMagic.Scene({
        triggerElement: "#milestones",
        triggerHook: 0,
        duration: "200%"
    })

    scene1.on("enter", () => {
        document.querySelector(".milestones-info").style.opacity = 1;
    });

    timeline.add(tween1).add(tween2).add(tween3);
    scene1.setTween(timeline);
    scene1.addTo(controller);
    scene1.setPin("#milestones");
}

function startConfidenceScene() {
    const controller = new ScrollMagic.Controller();
    const timeline = new TimelineMax();

    const tween1 = TweenMax.fromTo("#confidence-animate1", 1, { y: 4000 }, { y: 0, });
    const tween2 = TweenMax.fromTo("#confidence-animate2", 1, { y: 4000 }, { y: 0, });
    const tween3 = TweenMax.fromTo("#confidence-animate3", 1, { y: 4000 }, { y: 0, });

    const scene1 = new ScrollMagic.Scene({
        triggerElement: "#confidence",
        triggerHook: 0,
        duration: "200%"
    })

    scene1.on("enter", () => {
        document.querySelector(".confidence-info").style.opacity = 1;
    });

    timeline.add(tween1).add(tween2).add(tween3);
    scene1.setTween(timeline);
    scene1.addTo(controller);
    scene1.setPin("#confidence");
}

window.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth < 768) {
        document.querySelector(".milestones-info").style.opacity = 1;
        document.querySelector(".confidence-info").style.opacity = 1;
        return;
    }
    startMilestoneScene();
    startConfidenceScene();
});