$(document).ready(function () {
    // Filter button functionality
    $('.filter-btn').click(function (event) {
        event.preventDefault();

        // Remove active class from all buttons
        $('.filter-btn').removeClass('active');
        // Add active class to clicked button
        $(this).addClass('active');

        // Get the category to filter
        const category = $(this).data('category').toLowerCase();

        // Show or hide products based on category
        $('.product-card').each(function () {
            const productCategory = $(this).data('category').toLowerCase();
            if (category === 'all' || productCategory === category) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    // Search functionality
    $('#searchButton').click(function () {
        const query = $('#searchInput').val().toLowerCase();

        $('.product-card').each(function () {
            const productName = $(this).find('.product-name').text().toLowerCase();
            if (productName.includes(query)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    // Modal functionality
    const $modal = $('#productModal');
    const $modalClose = $('.modal-close');

    // Prevent modal from showing when "Buy It" button is clicked
    $('.buy-button').click(function (event) {
        event.stopPropagation();
        // Add your buy action code here
        alert("Product added to cart!"); // Example action
    });

    // Prevent modal from showing when "Buy It" button is clicked
    $('.add-cart-button').click(function (event) {
        event.stopPropagation();
        // Add your buy action code here
        alert("Product added to cart!"); // Example action
    });

    // Show modal when the product card (excluding "Buy It" button) is clicked
    $('.product-card').click(function () {
        const productName = $(this).find('.product-name').text();
        const productPrice = $(this).find('.product-price').text();
        const productRating = $(this).find('.product-rating').text();
        const productDescription = $(this).find('.product-description').text();

        $modal.find('.modal-header').text(productName);
        $modal.find('.modal-price').text(productPrice);
        $modal.find('.modal-rating').text(productRating);
        $modal.find('.modal-description').text(productDescription);

        $modal.show();
    });

    $modalClose.click(function () {
        $modal.hide();
    });

    $(window).click(function (event) {
        if ($(event.target).is($modal)) {
            $modal.hide();
        }
    });
});
