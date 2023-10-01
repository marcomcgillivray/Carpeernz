import BookCar from "./components/BookCar";
import Hero from "./components/Hero";
import LendCar from "./components/LendCar";
import PlanTrip from "./components/PlanTrip";

const HomePage = () => {
    return (
        <>
            <Hero />
            <BookCar />
            <PlanTrip />
            <LendCar />
        </>
    )
};

export default HomePage;