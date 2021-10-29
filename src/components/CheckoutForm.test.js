import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render,screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />);
});

test("shows success message on submit with form details", async () => {
    //Arrange: set up for success, render component were working with
    render(<CheckoutForm />)

    //Act:select the element(s) and actions/events in question to work with
    const submitButton = screen.getByRole('button');//select our submit button
    userEvent.click(submitButton);//simulate user clicking out button

    const success = await screen.findByTestId('successMessage')// this waits for user to click the submit button then finds the element with the test-id of successMessage as an attribute

    

    //Assert: verify that said elements and events are working as expected
    expect(success).toBeInTheDocument();// this checks that the successmessage element is in the document
    expect(success).toBeTruthy();//alternative way of making sure success message is dsiplaying
    expect(success).toBeVisible(); //checks if the elment is seen on the page
    // expect(success).toHaveLength(1); doesnt work because we are not getting an array back

    //ALTERNATIVE METHOD - lends more to manually break so i can verify check is really working
    // const success2 = await screen. getByText(/you have ordered some plants/i)//partial match to look for string of success message
    // expect(success2).toBeInTheDocument();

   
});
