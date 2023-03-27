import dal_mysql from "./dal_mysql";

const create_users_table = "CREATE TABLE IF NOT EXISTS `my_shopping`.`users` (`id` INT NOT NULL AUTO_INCREMENT,`unique_id` VARCHAR(36) NULL,`first_name` VARCHAR(20) NULL,`last_name` VARCHAR(20) NULL,`email` VARCHAR(50) NULL,`password` VARCHAR(255) NULL,`city` VARCHAR(20) NULL,`street` VARCHAR(20) NULL,`role` INT NULL,PRIMARY KEY (`id`));";
const create_products_table = "CREATE TABLE IF NOT EXISTS `my_shopping`.`products` (`id` INT NOT NULL AUTO_INCREMENT,`name` VARCHAR(45) NULL,`price` VARCHAR(45) NULL,`image` VARCHAR(255) NULL,`categoryId` VARCHAR(45) NULL,PRIMARY KEY (`id`));";
const create_categories_table = "CREATE TABLE IF NOT EXISTS `my_shopping`.`categories` (`id` INT NOT NULL AUTO_INCREMENT,`name` VARCHAR(25) NULL,PRIMARY KEY (`id`));";
const create_carts_table = "CREATE TABLE IF NOT EXISTS `my_shopping`.`carts` (`id` INT NOT NULL AUTO_INCREMENT,`userId` VARCHAR(45) NULL,`createdAt` DATE NULL,`hasOrder` TINYINT NULL,PRIMARY KEY (`id`));"; 
const create_cartItems_table = "CREATE TABLE IF NOT EXISTS `my_shopping`.`cartitems` (`id` INT NOT NULL AUTO_INCREMENT,`userId` VARCHAR(45) NULL,`productId` VARCHAR(45) NULL,`amount` INT NULL,`totalPrice` INT NULL,PRIMARY KEY (`id`));";
const create_orders_table = "CREATE TABLE IF NOT EXISTS `my_shopping`.`orders` (`id` INT NOT NULL AUTO_INCREMENT,`userId` VARCHAR(45) NULL,`cartId` VARCHAR(45) NULL,`totalPrice` INT NULL,`city` VARCHAR(45) NULL,`street` VARCHAR(45) NULL,`deliveryDate` DATETIME NULL,`orderDate` DATETIME NULL,`creditCard` VARCHAR(4) NULL,PRIMARY KEY (`id`));";

const building_DB_Tables = () => {
    dal_mysql.execute(create_users_table);
    dal_mysql.execute(create_products_table);
    dal_mysql.execute(create_categories_table);
    dal_mysql.execute(create_carts_table);
    dal_mysql.execute(create_cartItems_table);
    dal_mysql.execute(create_orders_table);
}

export default building_DB_Tables;