document.body.innerHTML =`
<div id="main">
<section id="welcome">
    <h1>Ski Lift</h1>
    <div class="home-container">
        <div class="info">
            <h1>
            <span>&#10052;&#10052;&#10052;&#10052;&#10052;&#10052;&#10052;&#10052;&#10052;&#10052;&#10052;</span> 
                Buy tickets
            <span>&#10052;&#10052;&#10052;&#10052;&#10052;&#10052;&#10052;&#10052;&#10052;&#10052;&#10052;</span>
             </h1>
        </div>
    </div>
</section>

<div id="wrapper">

    <section id="append-ticket">
        <div class="first-container"> 
                         
            <h1>Buy ticket</h1>
            
            <div class="container-text">
                <form action="">
                    <label for="first-name">First name:</label>
                    <input type="text" id="first-name" name="first-name">

                    <label for="last-name">Last name:</label>
                    <input type="text" id="last-name" name="last-name">                     

                        <label for="people-count">Number of people:</label>
                        <input type="number" id="people-count" name="people-count" >

                        <label for="from-date">From Date:</label>
                        <input type="date" id="from-date" name="from-date">

                        <label for="people-count">Days:</label>
                        <input type="number" id="days-count" name="days-count" >
                        
                    <button id="next-btn" type="submit">Next step &#x21e8;</button>
                </form>
                

            </div>
        </div>
    </section>

    <section id="info-ticket">
        <div class="ticket-info-container">
            <div class="first-container"> 
            <h1>Ticket Preview</h1>
            <ul class="ticket-info-list">
            </ul>
        </div>
        </div>
    </section>

    <section id="confirm-ticket-section">
        <div class="confirm-container">
            <div class="first-container"> 
            <h1>Confirm ticket</h1>
            <ul class="confirm-ticket">
            </ul>
        </div>
        </div>
    </section>
</div>

</div>
<div class="snowflakes" aria-hidden="true">
<div class="snowflake">
❅
</div>
<div class="snowflake">
❅
</div>
<div class="snowflake">
❅
</div>
<div class="snowflake">
❆
</div>
<div class="snowflake">
❅
</div>
<div class="snowflake">
❅
</div>
<div class="snowflake">
  ❅
</div>
<div class="snowflake">
  ❅
</div>
<div class="snowflake">
  ❅
</div>
<div class="snowflake">
    ❅
</div>
<div class="snowflake">
  ❅
</div>
<div class="snowflake">
    ❅
</div>
</div>
<script src="app.js"></script>
`
result();
const BuyTicket= {

      firstName: () => document.getElementById('first-name'),
      lastName: () => document.getElementById('last-name'),
      count: () => document.getElementById('people-count'),
      days: () => document.getElementById('days-count'),
      dateFrom: () => document.getElementById('from-date'),
      nextBtn: () => document.getElementById('next-btn')     
}
BuyTicket.firstName().value = "John";
BuyTicket.lastName().value = "Doe";
BuyTicket.count().value = "5";
BuyTicket.days().value = "5";
BuyTicket.dateFrom().value = "2023-02-18";



BuyTicket.nextBtn().click();
document.querySelector('.continue-btn').click();
document.querySelector('.cancel-btn').click();
document.querySelector('.back-btn').click();

expect($("#next-btn").prop('disabled'), 'Next button was not disabled').to.be.false;

// document.querySelector('.confirm-btn').click();

//  expect((document.querySelector("#body > h1")).textContent).to.equal("Thank you, have a nice day! ", "missing or false text");
//  expect((document.querySelector("#body > button")).textContent).to.equal("Back", "missing or false text");


// expect($(document.querySelector("#body > h1")).length).to.equal(1, "h1 element is not added")
// expect($(document.querySelector("#body > button")).length).to.equal(1, "button element is not added")


// expect($(document.querySelector("#body")).length).to.equal(0, "Information for the reservation must be removed from the body when click continue")


// expect((document.querySelector(".confirm-ticket > li > article > h3")).textContent).to.equal("Name: John Doe", "First and last names are invalid!");
// expect($(document.querySelectorAll(".confirm-ticket > li > article > p"))[0].textContent).to.equal("From date: 2023-02-18", "Date is invalid!");
// expect($(document.querySelectorAll(".confirm-ticket > li > article > p"))[1].textContent).to.equal("For 5 days", "Days is invalid!");
// expect($(document.querySelectorAll(".confirm-ticket > li > article > p"))[2].textContent).to.equal("For 5 people", "Guest number is invalid!");

// expect($(document.querySelectorAll(".confirm-ticket > li > button")).length).to.equal(2, "Buttons are not added successfully!")

// expect($(document.querySelectorAll(".confirm-ticket > li")).length).to.equal(1, "Information for the reservation must be transferred to confirm list when click continue")

// expect($(document.querySelector(".ticket-info-list > li")).length).to.equal(0, "Information for the reservation must be removed from the ul list when click continue")

// document.querySelector('.edit-btn').click();


// expect($("#next-btn").prop('disabled'), 'Next button was not enabled').to.be.false;

// expect($(document.querySelector(".ticket-info-list > li")).length).to.equal(0, "Information for the reservation must be removed from the ul list")

// expect($(document.getElementById("first-name")).val()).to.equal('John', 'First Name input field was not correct');
// expect($(document.getElementById("last-name")).val()).to.equal('Doe', 'Last Name input field was not correct');
// expect($(document.getElementById('people-count')).val()).to.equal('5', 'People number input field was not correct');
// expect($(document.getElementById('days-count')).val()).to.equal('5', 'Days was not correct');
// expect($(document.getElementById('from-date')).val()).to.equal('2023-02-18', 'Date was not correct');


// expect($(document.querySelectorAll("ticket-info-list > li > button")).length).to.equal(2, "Buttons are not added successfully!")

// expect($("#next-btn").prop('disabled'), 'Next button was not disabled').to.be.true;

// expect((document.querySelector(".ticket-info-list > li > article > h3")).textContent).to.equal("Name: John Doe", "First and last names are invalid!");
// expect($(document.querySelectorAll(".ticket-info-list > li > article > p"))[0].textContent).to.equal("From date: 2023-02-18", "Date is invalid!");
// expect($(document.querySelectorAll(".ticket-info-list > li > article > p"))[1].textContent).to.equal("For 5 days", "Days is invalid!");
// expect($(document.querySelectorAll(".ticket-info-list > li > article > p"))[2].textContent).to.equal("For 5 people", "Guest number is invalid!");




// expect($(document.querySelector(".ticket-info-list > li")).length).to.equal(0, "The ticket must be added to the list")



// expect($(document.getElementById("first-name")).val()).to.equal('', 'First Name input field was not cleared');
// expect($(document.getElementById("last-name")).val()).to.equal('', 'Last Name input field was not cleared');
// expect($(document.getElementById("people-count")).val()).to.equal('', 'People count input field was not cleared');
// expect($(document.getElementById("days-count")).val()).to.equal('', 'Days input field was not cleared');
// expect($(document.getElementById("from-date")).val()).to.equal('', 'Date  input field was not cleared');


// expect($(document.querySelector(".ticket-info-list > li")).length).to.equal(1, "The ticket must be added to the list")