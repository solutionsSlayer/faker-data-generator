const faker = require('faker');
const fs = require('fs')

function generateUsers() {
  let users = []

  for (let id=1; id <= 100; id++) {

    let address = faker.name.firstName();
    let email = faker.name.lastName();
    let password = faker.internet.email();
    let created_at = faker.date.recent();

    users.push({
        "id": id,
        address,
        email,
        password,
        created_at
    });
  }

  return users;
}

function generateCampaigns() {
  let campaigns = []

  for (let id=1; id <= 100; id++) {

    let title = faker.company.bs();
    let thumbnail = faker.image.people() ;
    let currentAmount = faker.finance.amount(20000, 40000);
    let goalAmount = faker.finance.amount(100000, 100000);
    let duration = faker.date.future();
    let description = faker.company.catchPhrase();
    let location = faker.address.country();

    campaigns.push({
        "id": id,
        title,
        thumbnail,
        currentAmount,
        goalAmount,
        duration,
        description,
        location
    });
  }

  return campaigns;
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