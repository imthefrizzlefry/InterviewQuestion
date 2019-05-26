import unittest
from selenium import webdriver

class SearchText(unittest.TestCase):
    @classmethod
    def setUpClass(inst):
        # create a new Firefox session
        inst.driver = webdriver.Chrome(executable_path=r".\\drivers\\chromedriver.exe")
        inst.driver.implicitly_wait(30)
        inst.driver.maximize_window()
        # navigate to the application home page
        inst.driver.get("http://www.google.com/")

    def test_search_by_text(self):
        # get the search textbox
        self.search_field = self.driver.find_element_by_name("q")

        # enter search keyword and submit
        self.search_field.send_keys("Selenium WebDriver Interview questions")
        self.search_field.submit()

        #get the list of elements which are displayed after the search
        #currently on result page usingfind_elements_by_class_namemethod

        lists = self.driver.find_elements_by_class_name("r")
        no=len(lists)
        self.assertEqual(14, len(lists))

    @classmethod
    def tearDown(inst):
        # close the browser window
        inst.driver.quit()

if __name__ == '__main__':
    unittest.main()