from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
import os
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
chrome_driver_path = "C:\\Users\\omega\\OneDrive\\Desktop\\coding\\projects\\signez\\asl\\asl\\chromedriver.exe"  # Replace with your actual path
driver = webdriver.Chrome(executable_path=chrome_driver_path)
driver.get("https://mgkagithub.github.io/asl/")
time.sleep(10)
os.system("cls")
def wait_till_loaded(newxp):
    try:
        # Define the condition to wait for (e.g., presence of a specific element)
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.XPATH,newxp))
        )
    except Exception as e:
        print("Error:", e)
# Set up ChromeDriver
# Open the website
# Find elements by their XPath, ID, class, etc., and interact with them
# search_bar = driver.find_element_by_xpath("/html/body/main/nav/a[2]/svg")
# search_bar.send_keys("hello")
# search_bar.send_keys(Keys.RETURN)

# Click on buttons
wait_till_loaded('//*[@id="logs"]')
button1 = driver.find_element_by_xpath('//*[@id="logs"]')
button1.click()
time.sleep(2)
wait_till_loaded('//*[@id="chat"]')
button1 = driver.find_element_by_xpath('//*[@id="chat"]')
button1.click()
time.sleep(2)
wait_till_loaded('//*[@id="premium"]')
button1 = driver.find_element_by_xpath('//*[@id="premium"]')
button1.click()
time.sleep(2)
wait_till_loaded('//*[@id="profile"]')
button1 = driver.find_element_by_xpath('//*[@id="profile"]')
button1.click()
time.sleep(2)
wait_till_loaded('//*[@id="settings"]')
button1 = driver.find_element_by_xpath('//*[@id="settings"]')
button1.click()
time.sleep(2)
wait_till_loaded('//*[@id="home"]')
button1 = driver.find_element_by_xpath('//*[@id="home"]')
button1.click()
# Add some waiting time to observe the actions
time.sleep(2)

# Close the browser window
driver.quit()
