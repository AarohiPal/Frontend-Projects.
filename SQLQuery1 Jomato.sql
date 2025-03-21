-- Task 1: Create a User-Defined Function to Stuff 'Chicken' into 'Quick Bites'
CREATE FUNCTION AddChicken (@Input NVARCHAR(255))
RETURNS NVARCHAR(255)
AS
BEGIN
    RETURN REPLACE(@Input, 'Quick Bites', 'Quick Chicken Bites');
END;
GO

-- Task 2: Use the Function to Display the Restaurant Name and Cuisine Type with Maximum Number of Ratings
WITH MaxRatings AS (
    SELECT MAX([No_of_Rating]) AS MaxRating FROM Jomato
)
SELECT 
    RestaurantName, 
    dbo.AddChicken(CuisinesType) AS ModifiedCuisineType
FROM Jomato
WHERE [No_of_Rating] = (SELECT MaxRating FROM MaxRatings);
GO

-- Task 3: Create a Rating Status Column Based on Rating
SELECT 
    OrderId, 
    RestaurantName, 
    Rating, 
    CASE 
        WHEN Rating > 4 THEN 'Excellent'
        WHEN Rating > 3.5 AND Rating <= 4 THEN 'Good'
        WHEN Rating > 3 AND Rating <= 3.5 THEN 'Average'
        ELSE 'Bad'
    END AS RatingStatus
FROM Jomato;
GO

-- Task 4: Find Ceil, Floor, Absolute Values of Rating and Display Current Date
SELECT 
    OrderId, 
    RestaurantName, 
    Rating,
    CEILING(Rating) AS CeilRating,
    FLOOR(Rating) AS FloorRating,
    ABS(Rating) AS AbsoluteRating,
    GETDATE() AS CurrentDate,
    YEAR(GETDATE()) AS Year,
    DATENAME(MONTH, GETDATE()) AS MonthName,
    DAY(GETDATE()) AS Day
FROM Jomato;
GO

-- Task 5: Display Restaurant Type and Total Average Cost Using ROLLUP
SELECT 
    RestaurantType, 
    SUM(CAST(AverageCost AS FLOAT)) AS TotalAverageCost
FROM Jomato
GROUP BY ROLLUP(RestaurantType);

