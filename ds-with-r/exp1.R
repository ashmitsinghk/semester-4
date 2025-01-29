# Load required libraries
library(dplyr)
library(ggplot2)

# Load a sample dataset
data <- read.csv("C:\\Users\\Ashmit\\Documents\\GitHub\\ds-with-r\\exp1.csv")
# Replace with a valid dataset

# Print a message and display the first few rows
cat("Dataset loaded successfully!\n")
head(data)

# Check for missing values
cat("Missing Values:\n")
colSums(is.na(data))

# Fill missing values using forward fill method
library(zoo)
data <- data %>% mutate_all(~ na.locf(., na.rm = FALSE))
cat("Missing values handled.\n")
head(data)

# Basic statistics
summary(data)

# Visualize a column
ggplot(data, aes(x = y)) +
  geom_histogram(fill = 'blue', color = 'black', alpha = 0.7) +
  labs(title = "Data Distribution", x = "Value", y = "Frequency")

x = data$x
y = data$y
plot(x, y, type = 'b', col = 'blue', main = "Graph", xlab = "X", ylab = "Y")
