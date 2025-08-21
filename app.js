//question 5

let id = 1;

function generateUniqueIds()
{
    return yield id++;
}

const generated_id = generateUniqueIds();
console.log(generated_id.next().value());

