#! zsh

# sed -i "" -e "s/BackEndApiTemplateTest/$1Test/" -e "s/backendapitemplate/$1/" .gitignore
# sed -i "" "s/backendapitemplatetest/$1Test/" backendapitemplatetest/backendapitemplatetest.csproj
# sed -i "" "s/backendapitemplate/$1/" backendapitemplate/backendapitemplate.csproj
# sed -i "" "s/BackEndApiTemplateTest/$1Test/" backendapitemplatetest/UnitTest1.cs
# sed -i "" "s/BackEndApiTemplate/$1/" backendapitemplate/Class1.cs backendapitemplatetest/UnitTest1.cs
# sed -i "" "s/backendapitemplate/$1/g" backendapitemplatetest/backendapitemplatetest.csproj
sed -i "" "s/backendapitemplatetest/$1Test/g" backendapitemplate.sln
sed -i "" "s/backendapitemplate/$1/g" backendapitemplate.sln

# mv backendapitemplatetest/backendapitemplatetest.csproj backendapitemplatetest/$1Test.csproj
# mv backendapitemplate/backendapitemplate.csproj backendapitemplate/$1.csproj
# mv backendapitemplatetest $1Test
# mv backendapitemplate $1
mv backendapitemplate.sln $1.sln
# mv .vs/backendapitemplate .vs/$1

# rm README.md
# rm rename.sh
# git add .
#! git commit -m "chore: rename project to $1"
