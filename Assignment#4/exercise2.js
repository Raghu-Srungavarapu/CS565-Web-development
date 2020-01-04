let rem = 0, d=0;
function rev(n)
{
    while(n!=0)
    {
        rem = n%10;
        d = d*10+rem;
        n = Math.floor(n/10);
    }
    console.log(d);
}

rev(231756);