
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export const woocommerce = new WooCommerceRestApi({
    url: "https://hrfleek.com",
    consumerKey: process.env.WC_CONSUMER_KEY,
    consumerSecret: process.env.WC_CONSUMER_SECRET,
    version: "wc/v3"
});