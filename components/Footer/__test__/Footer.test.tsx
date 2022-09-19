import { render ,screen } from "@testing-library/react";
import Footer from "../Footer";

let mockOpeningDaysTimes=[
    {day:"Monday",time:"7:00 - 24:00"},
    {day:"Tuesday",time:"7:00 - 24:00"},
    {day:"Wednesday",time:"7:00 - 24:00"},
    {day:"Thursday",time:"7:00 - 24:00"},
    {day:"Friday",time:"7:00 - 24:00"},
    {day:"Saturday",time:"7:00 - 24:00"},
    {day:"Sunday",time:"7:00 - 24:00"},
  ]

describe("Should test Footer component",()=>{

    it('should render 6 square images', () => {
        render(<Footer openingDaysTimes={mockOpeningDaysTimes}/>)
        let images = screen.getAllByAltText('food_imgs')
        expect(images.length).toBe(6)
    });

    it('should render each day and time', () => {
        render(<Footer openingDaysTimes={mockOpeningDaysTimes}/>)
        let listOfTime=  mockOpeningDaysTimes.filter(({day,time})=>{
            return screen.getByText(`${day} --------- ${time}`)
        })

        expect(listOfTime).toHaveLength(7)
        
    });
})