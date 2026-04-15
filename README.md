
# Move - Women's Gym Wear

## Problem Statement
Användare behöver kunna bläddra bland kläder, se produktdetaljer och lägga till produkter i varukorgen. 
Projektet visar hur ett e-handelssystem kan modelleras från krav till UML och klickbar prototyp.

## Demo Flow

1. Open `ui/index.html`
2. Browse the product list
3. Click a product to open `page2.html`
4. Select a size
5. Click **Add to cart**
6. The cart counter updates

---

## Stakeholders
- User (kund)
- System (frontend-prototyp)
- Admin (framtida utveckling)

---

## Functional Requirements
1. Visa produktlista
2. Öppna produktdetalj
3. Välja storlek
4. Add-to-cart är disabled tills storlek valts
5. Uppdatera cart counter
6. Live filter på produktlista

---

## Non-Functional Requirements
1. Responsiv design
2. Semantisk HTML
3. Ingen extern dependency
4. Kod ska vara modulär

---

## Prioritering (MoSCoW)

### Must
- Produktlista
- Produktdetalj
- Add to cart
- Cart counter

### Should
- Live filter
- Theme toggle

### Could
- Backend integration

### Won't
- Betalningssystem

---

## Use Case: Add selected size to cart

Actor: User

Preconditions:
User är på produktdetaljsidan.

Main flow:
1. Användare väljer storlek.
2. Klickar på Add to cart.
3. Systemet uppdaterar cart count.
4. Bekräftelse visas.

### Alternate Flow
If the user clicks "Add to cart" without selecting a size, the system shows a message asking the user to choose a size first. The product is not added to the cart.

Postconditions:
Cart count sparas i LocalStorage.

---

## UML-diagram
Se mappen `/docs`:
- Activity Diagram
- Sequence Diagram
- Class Diagram

## UI Prototype

The UI prototype is located in the `/ui` folder and contains:

- `index.html` – product list
- `page2.html` – product detail page
- `components.html` – component showcase
- `style.css` – shared styling
- `script.js` – minimal JavaScript interaction


## Change Log
- Flyttade CSS från HTML till separat style.css
- Refaktorerade script.js och tog bort duplicerad kod

## Design Choices

The domain chosen for this project is a mini e-commerce clothing store.  
This domain was selected because it contains clear entities such as products, categories and a shopping cart, which makes it suitable for object-oriented modelling.

The UI flow follows a typical e-commerce pattern:
Product List → Product Detail → Add to Cart.

This flow maps directly to the selected Use Case where a user browses products and adds an item to the cart.

The JavaScript functionality was intentionally kept minimal to focus on the requirements and interaction flow rather than complex logic.


## Risks and Limitations

This prototype is a simplified front-end demonstration and does not include a backend or database.  
Product data is static and the shopping cart is simulated only in the UI.

---

## Future Improvements

Possible improvements for a full version of the system could include:


- Backend integration with a database
- Real shopping cart and checkout flow
- User authentication and profiles
- Product data loaded dynamically from an API
