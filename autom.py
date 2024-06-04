from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
import os
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
stats = input("Internet status (1 or 0): ")
if stats == 1:
    sleep_time = 1.5
else:
    sleep_time = 10
s=Service('C:\\Users\\omega\\OneDrive\\Desktop\\coding\\projects\\signez\\asl\\asl\\chromedriver.exe')
driver = webdriver.Chrome(service=s)
driver.get("https://mgkagithub.github.io/asl/")
time.sleep(sleep_time)
os.system("cls")
def wait_till_loaded(newxp):
    try:
        WebDriverWait(driver, sleep_time).until(
            EC.presence_of_element_located((By.XPATH,newxp))
        )
    except Exception as e:
        print("Error:", e)
l1 = '//*[@id="signez"]'
l2 = '//*[@id="logs"]'
l3 = '//*[@id="premium"]'
l4 = '//*[@id="settings"]'
# search_bar = driver.find_element(by=By.XPATH, value="/html/body/main/nav/a[2]/svg")
# search_bar.send_keys("hello")
# search_bar.send_keys(Keys.RETURN)
wait_till_loaded(l1)
button1 = driver.find_element(by=By.XPATH, value=l1)
button1.click()
time.sleep(2)
wait_till_loaded(l2)
button1 = driver.find_element(by=By.XPATH, value=l2)
button1.click()
time.sleep(2)
wait_till_loaded(l1)
button1 = driver.find_element(by=By.XPATH, value=l1)
button1.click()
time.sleep(2)
wait_till_loaded(l3)
button1 = driver.find_element(by=By.XPATH, value=l3)
button1.click()
time.sleep(2)
wait_till_loaded(l1)
button1 = driver.find_element(by=By.XPATH, value=l1)
button1.click()
time.sleep(2)
wait_till_loaded(l4)
button1 = driver.find_element(by=By.XPATH, value=l4)
button1.click()
time.sleep(2)
wait_till_loaded(l1)
button1 = driver.find_element(by=By.XPATH, value=l1)
button1.click()
time.sleep(2)
driver.quit()