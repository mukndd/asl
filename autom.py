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
# search_bar = driver.find_element(by=By.XPATH, value="/html/body/main/nav/a[2]/svg")
# search_bar.send_keys("hello")
# search_bar.send_keys(Keys.RETURN)
wait_till_loaded('//*[@id="logs"]')
button1 = driver.find_element(by=By.XPATH, value='//*[@id="logs"]')
button1.click()
time.sleep(2)
wait_till_loaded('//*[@id="chat"]')
button1 = driver.find_element(by=By.XPATH, value='//*[@id="chat"]')
button1.click()
time.sleep(2)
wait_till_loaded('//*[@id="premium"]')
button1 = driver.find_element(by=By.XPATH, value='//*[@id="premium"]')
button1.click()
time.sleep(2)
wait_till_loaded('//*[@id="profile"]')
button1 = driver.find_element(by=By.XPATH, value='//*[@id="profile"]')
button1.click()
time.sleep(2)
wait_till_loaded('//*[@id="settings"]')
button1 = driver.find_element(by=By.XPATH, value='//*[@id="settings"]')
button1.click()
time.sleep(2)
wait_till_loaded('//*[@id="home"]')
button1 = driver.find_element(by=By.XPATH, value='//*[@id="home"]')
button1.click()
time.sleep(2)
driver.quit()