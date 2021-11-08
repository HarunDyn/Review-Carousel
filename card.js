function Card(imgNumber, name, job, info) {
    this.imgNumber = imgNumber;
    this.name = name;
    this.job = job;
    this.info = info
}

const card1 = new Card(1, "Harun Dayan", "Front End Developer", "A front-end developer links together the world of design and technology, packaging up the utility of the back end in an inviting way for users to interact with. They take website design files and convert them into HTML, JavaScript (JS) and/or CSS code — the core elements of front-end development ")
const card2 = new Card(2, "Aslly J. Miller", "Back End Developer", "A back-end developer is someone who builds and maintains the technology needed to power the components which enable the user-facing side of the website to exist. Their back end code adds utility to everything the front-end developer creates.")
const card3 = new Card(3, "Mia Divia Young", "UI Designer", "User interface (UI) design is the process designers use to build interfaces in software or computerized devices, focusing on looks or style. Designers aim to create interfaces which users find easy to use and pleasurable. UI design refers to graphical user interfaces and other forms—e.g., voice-controlled interfaces. ")
const card4 = new Card(4, "Peter Jone", "Devops/AWS", "DevOps Engineering on AWS teaches you how to use the combination of DevOps cultural philosophies, practices, and tools to increase your organization’s ability to develop, deliver, and maintain applications and services at high velocity on AWS. This course covers continuous integration (CI), continuous delivery (CD), infrastructure as code, microservices, monitoring and logging ")
const card5 = new Card(5, "Visha T. Long", "Data Scientist", "Data scientists are analytical experts who utilize their skills in both technology and social science to find trends and manage data. They use industry knowledge, contextual understanding, skepticism of existing assumptions – to uncover solutions to business challenges.")

const arrayCard = [card1, card2, card3, card4, card5];