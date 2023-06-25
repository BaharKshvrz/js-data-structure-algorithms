const originalStudent = {
    name: 'xyz',
    percentage: 85
};

const frozenStudent = Object.freeze(originalStudent);

frozenStudent.percentage = 90; // Property cannnot be altered
frozenStudent.age = 16;        // No new property can be added
delete frozenObject.name;      // Returns false. Property cannot be deleted