import EventAbout from "../components/event/EventAbout";
import EventAgenda from "../components/event/EventAgenda";
import EventBanner from "../components/event/EventBanner";
import EventBreadcrumb from "../components/event/EventBreadcrumb";
import EventDeliverMeals from "../components/event/EventDeliverMeals";
import EventMarquee from "../components/event/EventMarquee";

function Event() {
  return (
    <>
      <EventBreadcrumb />
      <EventBanner />
      <EventAbout />
      <EventMarquee />
      <EventAgenda />
      <EventDeliverMeals />
    </>
  );
}

export default Event;
