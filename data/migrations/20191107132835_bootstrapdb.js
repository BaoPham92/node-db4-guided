
exports.up = function(knex) {
  return knex.schema
  .createtable('species', tbl => {
      tbl.increments();
      tbl.string('name', 255).notNullable();
  })

  .createTable('animals', tbl => {
      tbl.increments();
      tbl.string('name', 255).notNullable();
      tbl.integer('species_id')
      .unsigned()
      .references('id')
      .inTable('species')
      // * what should happen when the primary key is deleted | other values: 'CASCADE','RESTRICT', 'NO ACTION', 'SET NULL'
      .onDelete('RESTRICT')
      // * about changing the value of the primary key | CASCADE changes 
      .onUpdate('CASCADE');
    
    })

    .createTable('zoos', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable();
        tbl.string('address', 255).notNullable();
    })

    .createTable('animal_zoos', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable();
        tbl.string('address', 255).notNullable();
        tbl.integer('zoo_id')
        .unsigned()
        .references('id')
        .inTable('zoos')
        .onDelete('RESTRICT') 
        .onUpdate('CASCADE');
        tbl.integer('animal_id')
        .unsigned()
        .references('id')
        .inTable('animal')
        // * what should happen when the primary key is deleted | other values: 'CASCADE','RESTRICT', 'NO ACTION', 'SET NULL'
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
        tbl.date('to').notNullable();
        tbl.date('from').notNullable();
    })
    
        
};

exports.down = function(knex) {
  
};
