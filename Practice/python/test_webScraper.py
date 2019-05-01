import unittest
import webScraper

class webScraperTests(unittest.TestCase):
     def test_webScraperGetsCorrectLength(self):
         expectedLength = 8579
         raw_html = webScraper.simple_get('https://home.stevenfarnell.net')
         self.assertEqual(len(raw_html), expectedLength)

     def test_webScraperThrowsExceptionOnInvalidPage(self):        
         self.assertRaises(webScraper.RequestException, webScraper.simple_get('https://invalid.stevenfarnell.net/'))

     def test_webScraperReturnNonForInvalidPage(self):        
         raw_html = webScraper.simple_get('https://invalid.stevenfarnell.net')
         self.assertTrue(raw_html is None)

