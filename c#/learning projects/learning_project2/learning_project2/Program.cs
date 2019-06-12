using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace learning_project2
{
    class Program
    {
        static void Main(string[] args)
        {
            Start:
            Double num01;
            Double num02;
            Console.Write("Type a number to be devided: ");
            num01 = Convert.ToDouble(Console.ReadLine());
            Console.Write("type another number: ");
            num02 = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("The result is " + num01+ "/" +num02 + " = " + num01 / num02);
            Console.ReadKey();
            Console.WriteLine();
            goto Start;
        }
    }
}
