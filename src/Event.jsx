import EventAbout from "../layout/event/EventAbout";
import EventAgenda from "../layout/event/EventAgenda";
import EventBanner from "../layout/event/EventBanner";
import EventBreadcrumb from "../layout/event/EventBreadcrumb";
import EventDeliverMeals from "../layout/event/EventDeliverMeals";
import EventMarquee from "../layout/event/EventMarquee";

function Event() {
    return (<>
        <EventBreadcrumb />
        <EventBanner />
        <EventAbout />
        <EventMarquee />
        <EventAgenda />
        <EventDeliverMeals />
    </>)
}

export default Event; 