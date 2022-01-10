def isPalindrome(x):
        str_int = list(str(x))
        str_int.reverse()
        if (str_int == list(str(x))):
            return True
        return False

isPalindrome(123)