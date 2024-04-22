from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

# Set up ChromeDriver
chrome_driver_path = "C:\\Users\\omega\\OneDrive\\Desktop\\coding\\projects\\signez\\asl\\asl\\chromedriver.exe"  # Replace with your actual path
driver = webdriver.Chrome(executable_path=chrome_driver_path)
# Open the website
driver.get("https://mgkagithub.github.io/asl/")
sleep(10)
# Find elements by their XPath, ID, class, etc., and interact with them
# search_bar = driver.find_element_by_xpath("/html/body/main/nav/a[2]/svg")
# search_bar.send_keys("hello")
# search_bar.send_keys(Keys.RETURN)

# Click on buttons
button1 = driver.find_element_by_xpath("/html/body/main/nav/a[2]/svg")
button1.click()
time.sleep(2)
button1 = driver.find_element_by_xpath("/html/body/main/nav/a[3]/svg")
button1.click()
time.sleep(2)
button1 = driver.find_element_by_xpath("/html/body/main/nav/a[4]/svg")
button1.click()
time.sleep(2)
button1 = driver.find_element_by_xpath("/html/body/main/nav/a[5]/svg")
button1.click()
time.sleep(2)
button1 = driver.find_element_by_xpath("/html/body/main/nav/a[6]/svg")
button1.click()
time.sleep(2)
button1 = driver.find_element_by_xpath("/html/body/main/nav/a[1]/svg")
button1.click()

# Add some waiting time to observe the actions
time.sleep(2)

# Close the browser window
driver.quit()
