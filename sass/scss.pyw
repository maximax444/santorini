import re
import glob

def parce(line, width):
	containsPx = line.find('px')
	if containsPx != -1:
		patternString = r"\b\d*?px"
		matchString = re.findall(patternString, line)
		for j in matchString:
			matchString2 = re.search(patternString, line)
			# newStr = re.sub(patternString, repl, line, count=0)
			# print(matchString2)
			# print(matchString2.group(0))
			# print(float(matchString2.group(0)[1:-2]))
			# print(float(matchString2.group(0)[1:-2])/width)
			# print(str(((float(matchString2.group(0)[1:-2]))/width)*100))
			line = line.replace(matchString2.group(0), '' + str(((float(matchString2.group(0)[0:-2]))/width)*100) + 'vw', 1)
	return line
def parsScss(lines):
	# 0 - mob
	# 1 - tablet
	# 2 - netbuk
	# 3 - pc
	typeOfDevice = 3
	output = ''
	for i in lines:
		containsMedia = i.find('media')
		if containsMedia != -1:
			typeOfMedia = re.search("\s\d*?px", i).group(0)[1:-2]
			if (int(typeOfMedia) == 600):
				typeOfDevice = 1
			elif (int(typeOfMedia) == 1100):
				typeOfDevice = 2
			elif (int(typeOfMedia) == 1400):
				typeOfDevice = 4
			else:
				typeOfDevice = 3
			output += i + '\n'
			continue
		if (typeOfDevice == 1):
			output += parce(i, 375) + '\n'
		elif (typeOfDevice == 2):
			output += parce(i, 768) + '\n'
		elif (typeOfDevice == 4):
			output += parce(i, 1120) + '\n'
		elif (typeOfDevice == 2):
			output += i + '\n'
		else:
			output += parce(i, 1440) + '\n'
	return output
for filename in glob.glob('*.sass'):
	file = open(filename, "r")
	filein = file.read()
	lines = filein.split('\n')
	file = open(filename, "w")
	file.write(parsScss(lines))

