const faker = require('faker');
const fs = require('fs')

function generateUsers() {
  let users = []

  for (let id=1; id <= 10; id++) {
    users.push({  'id': id, ...generateUser() });
  }

  return users;
}

function generateUser() {
  let firstname = faker.name.firstName();
  let lastname = faker.name.lastName();
  let email = faker.internet.exampleEmail();
  let thumbnail = faker.image.avatar();
  let password = faker.internet.email();
  let created_at = faker.date.recent();

  return user = {
      firstname,
      lastname,
      thumbnail,
      email,
      password,
      created_at
  };
}  

function generateCampaigns() {
  let campaigns = []

  for (let id=1; id <= 10; id++) {
    let title = faker.company.bs();
    let description = faker.company.catchPhrase();
    let thumbnail = faker.image.people() ;
    let currentAmount = faker.finance.amount(20000, 40000);
    let goalAmount = faker.finance.amount(100000, 100000);
    let duration = faker.date.future();
    let location = faker.address.country(); 
    let comments = generateComments(); 

    campaigns.push({
        "id": id,
        title,
        thumbnail,
        currentAmount,
        goalAmount,
        duration,
        description,
        location,
        comments
    });
  }

  return campaigns;
}

function generateComments() {
  let comments = []

  for (let id=1; id <= 10; id++) {
    let content = faker.random.words(30);
    let user = generateUser();

    comments.push({
        "id": id,
        content,
        user
    });
  }

  return {
    length: comments.length,
    comments,
  };
}

function generateData() {
  const users = generateUsers();
  const campaigns = generateCampaigns();

  return { "data": {
    "users": { ...users },
    "campaigns": { ...campaigns }
  } }
}

let dataObj = generateData();

fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));