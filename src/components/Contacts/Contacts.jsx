import styles from './Contacts.module.css'

export default function Contacts() {
  return (
    <div className={ styles.contacts }>
      <h1>Contacts</h1>
      <p>We would love to hear from you! Whether you have a question,
        need assistance, or just want to share your feedback, our 
        team at Krist Clothing Store is here to help.</p>
      <br />
      <h2>Customer Service</h2>
      <p>Phone: +1 (123) 456-7890</p>
      <p>Email: support@kristclothing.com</p>
      <br />
      <p>Our customer service team is available Monday to Friday from 9 AM to 6 PM.</p>
      <br />
      <h2>Visit Our Store</h2>
      <h3>Address:</h3>
      <p>123 Fashion Avenue, Suite 456, City, State, ZIP Code</p>
      <br />
      <h3>Store Hours:</h3>
        <p>Monday to Friday: 10 AM - 8 PM</p>
        <p>Saturday: 11 AM - 7 PM</p>
        <p> Sunday: 12 PM - 6 PM</p>
      <br />
      <h2>Follow US</h2>
        <p>Stay connected and be the first to know about our latest collections,
         exclusive offers, and events.</p>
         <br />
        <p>Instagram: @kristclothing</p>
        <p>Facebook: Krist Clothing</p>
        <p>Twitter: @kristclothing</p>
    </div>
  )
}