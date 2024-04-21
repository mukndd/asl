from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

# Set up ChromeDriver
chrome_driver_path = "C:\\Users\\omega\\OneDrive\\Desktop\\coding\\projects\\signez\\chromedriver.exe"  # Replace with your actual path
driver = webdriver.Chrome(executable_path=chrome_driver_path)

# Open the website
driver.get("")

# Find elements by their XPath, ID, class, etc., and interact with them
search_bar = driver.find_element_by_xpath("//input[@id='search-bar']")
search_bar.send_keys("hello")
search_bar.send_keys(Keys.RETURN)

# Click on buttons
button1 = driver.find_element_by_xpath("//button[@id='button1']")
button1.click()

# Add some waiting time to observe the actions
time.sleep(2)

# Close the browser window
driver.quit()
