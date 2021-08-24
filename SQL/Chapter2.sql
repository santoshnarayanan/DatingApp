/****** Script for SelectTopNRows command from SSMS  ******/
SELECT TOP (1000) [Id]
      ,[UserName]
  FROM [DatingApp].[dbo].[Users]

  INSERT INTO [DatingApp].[dbo].[Users](UserName)VALUES('Bob');
  INSERT INTO [DatingApp].[dbo].[Users](UserName)VALUES('Tom');
  INSERT INTO [DatingApp].[dbo].[Users](UserName)VALUES('Jane');