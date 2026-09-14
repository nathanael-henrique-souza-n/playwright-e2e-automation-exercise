# Feature: Shopping Cart

## Business Rules

## Positive Scenarios

### BR-001 - Add a product to the cart successfully

**Given** the user is on the home page
**When** they select a product and click the "Add to Cart" button
**And** the product is available
**Then** the product should be added to the cart successfully
**And** the message "Product added to cart" should be displayed

### BR-002 - Increase the quantity of a product in the cart

**Given** the user has a product already added to the cart
**When** they increase the quantity of that product
**Then** the cart should update the total quantity
**And** the cart total should reflect the new quantity

### BR-003 - The system should remove a product from the cart successfully

**Given** the user has one or more products in the shopping cart
**When** the user removes a product from the cart
**Then** the product should be removed from the cart and the cart total should be updated

# ==============================================

## Negative Scenarios

### BR-004 - Add an out-of-stock product to the cart

**Given** the user is on the home page
**When** they try to add a product that is out of stock
**Then** the product should not be added to the cart
**And** the browser should display a message indicating that the product is unavailable

### BR-005 - The system should not allow checkout when the user is not logged in

**Given** the user has products in the shopping cart and is not authenticated
**When** the user tries to proceed to checkout
**Then** the system should redirect the user to login and prevent checkout until authentication is completed
