import React from 'react';

import './header.css';

const Header = () => {

    $(document).ready(function(){
    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 150});   
    
    // Add smooth scrolling on all links inside the navbar
    $("#navbar-pash a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
    
        // Store hash
        var hash = this.hash;
    
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
        
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
        }  // End if
    });
    });

  return (
    <header-section>
    
        <nav id="navbar-pash" class="navbar sticky-top navbar-expand-lg navbar-light bg-light mt-3">
            <a class="navbar-brand" href="#">PASH DIGI</a>
            <ul class="nav nav-pills">
            <li class="nav-item">
                <a class="nav-link" href="#Service">Service</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#section2">Company</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#section3">Values</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#section4">Prices</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#section5">Blog</a>
            </li>
            </ul>
        </nav>
    <body>
        <div data-spy="scroll" data-target="#navbar-pash" data-offset="80">
                <div id="section1" class="container-fluid">
                    <div class="container">
                        <h4 id="Service">Service</h4>
                        <p>Veniam marfa mustache skateboard, adipisicing fugiat velit pitchfork 
                        beard. Freegan beard aliqua cupidatat mcsweeney's vero. Cupidatat 
                        four loko nisi, ea helvetica nulla carles. Tattooed cosby sweater 
                        food truck, mcsweeney's quis non freegan vinyl. Lo-fi wes anderson 
                        +1 sartorial. Carles non aesthetic exercitation quis gentrify. Brooklyn 
                        adipisicing craft beer vice keytar deserunt. Veniam marfa mustache 
                        skateboard, adipisicing fugiat velit pitchfork beard. Freegan beard 
                        aliqua cupidatat mcsweeney's vero. Cupidatat four loko nisi, ea 
                        helvetica nulla carles. Tattooed cosby sweater food truck, mcsweeney's 
                        quis non freegan vinyl. Lo-fi wes anderson +1 sartorial. Carles non aesthetic 
                        exercitation quis gentrify. Brooklyn adipisicing craft beer vice keytar deserunt.</p>
                    </div>
                </div>
                <div id="section2" class="container-fluid">
                    <div class="container">
                        <h4 id="Company">Company</h4>
                        <p>Companies today are rushing headlong to become more digital. But what does 
                            digital really mean?

                            For some executives, it’s about technology. For others, digital is a new way 
                            of engaging with customers. And for others still, it represents an entirely 
                            new way of doing business. None of these definitions is necessarily incorrect. 
                            But such diverse perspectives often trip up leadership teams because they reflect 
                            a lack of alignment and common vision about where the business needs to go. 
                            This often results in piecemeal initiatives or misguided efforts that lead to 
                            missed opportunities, sluggish performance, or false starts.

                            Even as CEOs push forward with their digital agendas, it’s worth pausing to clarify 
                            vocabulary and sharpen language. Business leaders must have a clear and common 
                            understanding of exactly what digital means to them and, as a result, what it means 
                            to their business (for a deeper look at how companies can develop meaningful digital 
                            strategies and drive business performance, see “Raising your Digital Quotient”).

                            It’s tempting to look for simple definitions, but to be meaningful and sustainable, 
                            we believe that digital should be seen less as a thing and more a way of doing things. 
                            To help make this definition more concrete, we’ve broken it down into three attributes: 
                            creating value at the new frontiers of the business world, creating value in the processes 
                            that execute a vision of customer experiences, and building foundational capabilities 
                            that support the entire structure.</p>
                    </div>
                </div>
                <div id="section3" class="container-fluid">
                    <div class="container">
                        <h4 id="one">Creating value at new frontiers</h4>
                        <p>Being digital requires being open to reexamining your entire way of doing business and 
                        understanding where the new frontiers of value are. For some companies, capturing new 
                        frontiers may be about developing entirely new businesses in adjacent categories; for others, 
                        it may be about identifying and going after new value pools in existing sectors.

                        Unlocking value from emerging growth sectors requires a commitment to understanding the 
                        implications of developments in the marketplace and evaluating how they may present 
                        opportunities or threats. The Internet of Things, for example, is starting to open 
                        opportunities for disrupters to use unprecedented levels of data precision to identify 
                        flaws in existing value chains. In the automotive industry, cars connected to the outside 
                        world have expanded the frontiers for self-navigation and in-car entertainment. In the 
                        logistics industry, the use of sensors, big data, and analytics has enabled companies to 
                        improve the efficiency of their supply-chain operations.

                        At the same time, being digital means being closely attuned to how customer decision journeys 
                        are evolving in the broadest sense. That means understanding how customer behaviors and 
                        expectations are developing inside and outside your business, as well as outside your sector, 
                        which is crucial to getting ahead of trends that can deliver or destroy value.</p>
                    </div>
                </div>
                <div id="section4" class="container-fluid">
                    <div class="container">
                        <h4 id="two">Creating value in core businesses</h4>
                        <p>Digital’s next element is rethinking how to use new capabilities to improve how customers are 
                        served. This is grounded in an obsession with understanding each step of a customer’s purchasing 
                        journey—regardless of channel—and thinking about how digital capabilities can design and deliver 
                        the best possible experience, across all parts of the business. For example, the supply chain is 
                        critical to developing the flexibility, efficiency, and speed to deliver the right product 
                        efficiently in a way the customer wants. By the same token, data and metrics can focus on 
                        delivering insights about customers that in turn drive marketing and sales decisions.

                        Critically, digital isn’t about just working to deliver a one-off customer journey. It’s about 
                        implementing a cyclical dynamic where processes and capabilities are constantly evolving based 
                        on inputs from the customer, fostering ongoing product or service loyalty. Making this happen 
                        requires an interconnected set of four core capabilities:

                        Proactive decision making. Relevance is the currency of the digital age. This requires making 
                        decisions, based on intelligence, that deliver content and experiences that are personalized 
                        and relevant to the customer. Remembering customer preferences is a basic example of this 
                        capability, but it also extends to personalizing and optimizing the next step in the customer’s 
                        journey. Data providers such as ClickFox, for example, blend data from multiple channels into 
                        one view of what customers are doing and what happens as a result. In the back office, analytics 
                        and intelligence provide near-real-time insights into customer needs and behaviors that then 
                        determine the types of messages and offers to deliver to the customer.

                        Contextual interactivity. This means analyzing how a consumer is interacting with a brand and 
                        modifying those interactions to improve the customer experience. For example, the content and 
                        experience may adapt as a customer shifts from a mobile phone to a laptop or from evaluating a 
                        brand to making a purchasing decision. The rising number of customer interactions generates a 
                        stream of intelligence that allows brands to make better decisions about what their customers 
                        want. And the rapid rise of wearable technology and the Internet of Things represents the latest 
                        wave of touchpoints that will enable companies to blend digital and physical experiences even more.

                        Real-time automation. To support this cyclical give-and-take dynamic with customers and help 
                        them complete a task now requires extensive automation. Automation of customer interactions 
                        can boost the number of self-service options that help resolve problems quickly, personalize 
                        communications to be more relevant, and deliver consistent customer journeys no matter the 
                        channel, time, or device. Automating the supply chain and core business processes can drive 
                        down costs, but it’s also crucial to providing companies with more flexibility to respond to 
                        and anticipate customer demand.

                        Journey-focused innovation. Serving customers well gives companies permission to be innovative 
                        in how they interact with and sell to them. That may include, for example, expanding existing 
                        customer journeys into new businesses and services that extend the relationship with the customer, 
                        ideally to the benefit of both parties. These innovations in turn fuel more interactions, create 
                        more information, and increase the value of the customer-brand relationship.</p>
                    </div>
                </div>
            
                <div id="section5" class="container-fluid">
                    <div class="container">
                        <h4 id="three">Building foundational digital capabilities</h4>
                        <p>The final element of our definition of digital is about the technological and organizational processes 
                        that allow an enterprise to be agile and fast. This foundation is made up of two elements:

                        Mind-sets. Being digital is about using data to make better and faster decisions, devolving decision 
                        making to smaller teams, and developing much more iterative and rapid ways of doing things. 
                        Thinking in this way shouldn’t be limited to just a handful of functions. It should incorporate 
                        a broad swath of how companies operate, including creatively partnering with external companies 
                        to extend necessary capabilities. A digital mind-set institutionalizes cross-functional 
                        collaboration, flattens hierarchies, and builds environments to encourage the generation of new 
                        ideas. Incentives and metrics are developed to support such decision-making agility.
                        
                        System and data architecture. Digital in the context of IT is focused on creating a two-part 
                        environment that decouples legacy systems—which support critical functions and run at a slower 
                        pace—from those that support fast-moving, often customer-facing interactions. A key feature of 
                        digitized IT is the commitment to building networks that connect devices, objects, and people. 
                        This approach is embodied in a continuous-delivery model where cross-functional IT teams automate 
                        systems and optimize processes to be able to release and iterate on software quickly.

                        Digital is about unlocking growth now. How companies might interpret or act on that definition 
                        will vary, but having a clear understanding of what digital means allows business leaders to 
                        develop a shared vision of how it can be used to capture value.
                        </p>
                    </div>
                </div>
        </div>
    </body>
    </header-section>
  );
};

export default Header;