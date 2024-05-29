# The HD DVD Store

Welcome to the HD DVD Store! This project is an e-commerce website for selling HD DVDs, designed with a clean and responsive interface using Bootstrap for the CSS framework.

## Technologies Used

- React
- TypeScript
- Bootstrap
- Vercel

## Project Overview

The project utilizes TypeScript throughout to ensure type-safety and clean, deployable code. It also employs Bootstrap to create a responsive UI/UX, as the user interacts between the homepage, storefront, shopping cart, and a page on the history of the short-lived high-definition disc format. React Router is used to navigate between different pages. It also utilizes the Context API, various hooks (including a custom one), JSON, and local storage to manage the state of the HD DVD shopping cart.

### Homepage

The homepage serves as the landing page of the store, providing navigation to other sections of the website as well as showcasing a timeline of the HD DVD format's rise and fall in image form.

### History Section

The history section provides an extensive description about the 2-year history of commercial HD DVDs. Although this section doesn't interact with the purchasing sections of the website, I still thought it was necessary to educate users and enhance their appreciation for the format.

### Store Section

The store section allows users to browse the available HD DVDs imported through a JSON file. Users can add movies to their cart by clicking the "Add To Cart" button. The cart will then update and be viewable in a side-loading window, which provides an overview of the items selected for purchase.

### Cart Functionality

The cart functionality is designed to offer a smooth shopping experience. When items are added to the cart, the user can click the basket icon to bring up the side-loading window. This displays the current contents of the cart with options to adjust quantities or remove items. It also shows the price of the individual HD DVDs as well as the cumulative total.

The primary goal of this project was to improve both my TypeScript and React skills, which has been achieved with how all these sections work with each other.

## Installation

To run the project locally, follow these steps:

1. Clone the repository (for Git): `git clone https://github.com/acktreptow/hd-dvd-store.git`.
2. Navigate to the project directory: `cd hd-dvd-store`.
3. Type `npm install` into the command line to ensure all dependencies are installed.
4. Type `npm run dev` into the command line to view it in your preferred browser.

## Contributing

Contributions are welcome to improve the HD DVD store! To do so, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## Contact

If you’d like to contribute, have questions, or want to provide feedback, please reach out to me at [alex@treptow.dev](mailto:alex@treptow.dev)

## Future Enhancements

I don't plan on any significant updates to the HD DVD store unless someone contributes with a great new feature.

## License

This project is licensed under the MIT License.
