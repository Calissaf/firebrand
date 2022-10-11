# Module 3

## Content: Application lifecycle management

* Software dev stakeholders
* App managment lifecycle
* Functional requirements
* Non-functional requirements
* The Systems Analysis Phase
* The System Design Phase
* The Development Phase
* The Testing Phase
* The Operations Phase
* Agile & DevOps

## Stakeholders and responsibilities

### Stakeholders

* Business Owner
  * business representative
  * sets out problem / defines the business needs
  * pays for developement of software
  * has final say
* Solution Architect
  * creates end to end design
  * creates algorithms
  * converts the requirements into an architecture and design that will become the blueprint for the solution being created
* Project Manager
  * responsible for timescales and budgets
  * on time delivery
  * make sure the devs aren't blocked by anything
  * resolves any conflict in the team
* Business Analyst
  * defines requirements
  * works with owner
  * looks at what the software needs to do to solve the problems it's targetting
  * collects client’s requirements, analyzes what features should be created, and defines how it should be done
  * conduct competitor research to ensure the sustainability of the software in the market and its competitiveness with existing products
  * creates doccumentation on requirements and passes this onto the solutions architect for design stage
* Software Developer
  * writes the code to meet the customers requirements
    * set out by the business analysts and solution architects
  * run initial tests on their code: unit tests
  * write doccumentation for the code: how it works ect
* Software Tester
  * writes test plans for the software
  * tests whether the code written by the devs works according to the customers requirements: checking quality and security of the code
* Trainer
  * teaches users how to use the software
* Operations Engineer
  * support, manage and maintain the application
  * monitoring
  * back up & recovery
* Service Desk
  * Provides advice and tech support for users

* lifecycle: business owner -> business analyst -> solutions architect -> project manager -> software devs -> software tester -> Trainer -> Operations Engineer & Service desk

### Spcialists

* Coder
  * transact SQL
  * python
  * forms designer
  * java
* Database Administrator
  * transact SQL
* Web Developer
  * HTML
  * java
* Content Developer
  * HTML
* User Experience Developer
  * HTML
  * forms designer
  * looks at design of front end
  * is it appealing and useable for the customer
* DevOps Engineer
  * monitoring
  * python
* Consultant Developer
  * how to guidance
* Enterprise Architect
  * app integration design
  * IT strategy
* Solution Architect
  * solution design
* Data Architect
  * app integration design
* Infrastructure Architect
  * server & network design

## Application lifecycle

### Phases

* Phase 1: Requirements
* Phase 2: Analysis
* Phase 3: Design
* Phase 4: Coding
* Phase 5: Testing
* Phase 6: Operation

#### Phase 1: Gathering requirements

* Needs
  * Business needs are goals and objectives that the business must meet
  * Can be segregated into lower level detailed requirements
  * Not as specific as requirements
* Requirements
  * The things we need to do or build to achieve a need
  * A need can lead to one or more requirements
  * More specific and detailed

* Functional Requirements
  * Business Rules
  * Transaction corrections, adjustments and cancellations
  * Administrative functions
  * Authentication
  * Authorization levels
  * Audit Tracking
  * External Interfaces
  * Certification Requirements
  * Reporting Requirements
  * Historical Data
  * Legal or Regulatory Requirements

* Non Functional Requirements
  * Performance
  * Scalability
  * Capacity
  * Availability
  * Reliability & Recoverability
  * Maintainability
  * Serviceability
  * Security
  * Regulatory
  * Manageability
  * Data Integrity
  * Usability
  * Interoperability

#### Phase 2: Systems Analysis

* analysis occurs in a feedback loop:
  * Capture Requirement -> Understood? -> Clear? -> Free of ambiguity? -> Practical? -> Fit for purpose? -> refine -> play back to business owner -> capture requirements(loop starts over again)

#### Phase 3: Design Phase

* Inputs
  * funtional requirements
  * non-functional requirements
  * use cases
* Output
  * prototypes
  * design documents
* Participants in phase
  * solution architect
  * software devs
  * UX designer

#### Phase 4: Coding

* devs:
* write the unit tests, code and doccumentation
* test that code passes unit tests

#### Phase 5: Testing

* two methods:
  * white box
    * testers can see the code written by the devs
  * black box
    * testers don't see the code written by the devs

* testing levels
  * unit testing
    * performed at the earliest stages of the development process
      * normally run by devs
    * tests an individual component is correct -> fufils desired requirements and functionality
    * run on each component in isolation
  * integration testing
    * tests different parts of the system in combination to assess if they work correctly together
  * system testing
    * tests all the components of the software as a whole to ensure that the overall product meets the requirements specified
    * testers need to ensure that the product meets business requirements, as well as determine that it runs smoothly within its operating environment
  * regression testing
    * testing to confirm that a recent program or code change has not adversely affected existing feature
      * uses a full or partial selection of already executed test cases that are re-executed to ensure existing functionalities work fine
  * user acceptance testing
    * last stage of testing where a product is given the green light to launch or not
    * evaluate whether the system complies with the end-user requirements and if it is ready for deployment
    * utilises a variety of methods i.e. pre-written scenarios and test cases to test the software
      * use the results obtained from these tools to find ways in which the system can be improved
    * has a broad scope from finding spelling mistakes and cosmetic errors, to uncovering bugs that could cause a major error in the application
    * looks at how the product will perform when it is installed on the user’s system

#### Phase 6: Operations

* Monitoring
  * verifies functionality of a unit code
* release
  * functional releases
  * stability releases
* service desk
  * support
  * change management
  * config management
* support
  * troubleshooting
* systems admin
  * Backup, Restore, Maintenance, Update / Patch Management, Scaling

##### DevOps

* Monitoring
  * Infrastructure
  * Operating Systems
  * Application Insights
* Release
  * Infrastructure as Code
  * Continuous Development
  * Continuous Integration
  * Artefact Repositories
  * Code Repositories
  * Documentation Repositories
* Planning
  * Sprints
  * Backlogs
  * Planning Boards

### Agile vs Waterfall

* Agile:
  * build features in stages with frequent releases and refinements
  * analyse -> plan -> (loop of: design -> build -> test) -> deploy
* Waterfall
  * set out requirement build all the features then deploy the product
  * analyse -> plan -> design -> build -> test -> deploy
